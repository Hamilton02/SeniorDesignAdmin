import React, { useState, useEffect } from 'react';
import calls from '../helpers/calls';
import Menu from '../components/Menu';
import logo from "../images/logo.png";
import user_icon from "../images/user_icon.png";
import {PencilIcon, TrashIcon} from '@heroicons/react/20/solid'
import '../stylesheets/active-materials.css'
import DeleteMaterial from '../components/Popups/DeleteMaterial';
import Popup from 'reactjs-popup';

const ActiveMaterials = () => {
    const [materials, setMaterials] = useState(null);

    useEffect(() => {
        // Fetch data or perform some other action
        // For example, we'll just set some dummy data
        const fetchData = async () => {
             calls.getMaterials(setMaterials);
        };

        fetchData();

    }, [])

    const genItems = () => {
        if(materials){
            return materials.map((material) => 
                <li className='material-item'>
                    <MaterialItem material={material} key={material.id} />
                </li>
            )
        }else{
            return <div>Loading...</div>
        }
    }

    return (
        <div>
             <div className="header">
                <img src={logo} className="logo"/>
                <div className="title">Listado de Materiales</div>
                <img src={user_icon} className="user_icon"/>
            </div>
            <div className='body'>
                <Menu />
                <div className='table'>
                    <h1>Materiales Activos</h1>
                    <ul className='material-items'>
                        {genItems()}
                    </ul>
                </div>
                <AddMaterial />
            </div>
        </div>
    );
};

const MaterialItem = ({material}) => {

    const [mode, setMode] = useState('view')
    const [name, setName] = useState(material.name)
    const [deleteOpen, setDeleteOpen] = useState(false)

    const submitDelete = () => {
        calls.deleteMaterial(material.id)
    }

    const submitEdit = () => {
        calls.editMaterial({category: {name: name, id: material.id}}, material.id)
    }

    return (
        <>
            <div>
                {mode === 'view' ? <p>{material.name}</p> : <><input value={name} onChange={(e) => setName(e.target.value) } /> <button onClick={() => submitEdit()}>Submit</button></>}
            
            </div>
            <div>
                <button onClick={()=> {mode === 'view' ? setMode('edit') : setMode('view')}} ><PencilIcon height={24} width={24} color='#000'/></button>
                <button onClick={() => setDeleteOpen(true)}><TrashIcon height={24} width={24} color='#000'/></button>
                <Popup open={deleteOpen} closeOnDocumentClick>
                    <DeleteMaterial closePopup={setDeleteOpen} material={material}/>
                </Popup>
            </div>
        </>
    );
}

const AddMaterial = () => {
    const [name, setName] = useState('')

    const handleSubmit = () => {
        calls.addMaterial({category: {name: name}})
        setName('')
    }

    return (
        <div className='add-material'>
            <h2>Agregar Material</h2>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => handleSubmit()}>Submit</button>
        </div>
    );
}

export default ActiveMaterials;
