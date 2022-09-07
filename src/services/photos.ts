import { Photo } from "../types/Photo";
import {storage} from '../libs/firebase';
import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage';
import { async } from "@firebase/util";
import { v4 as createId } from 'uuid';


export const getAll = async () =>{
    let list:Photo[] = [];
    const imagesFolder = ref(storage, "images" );
    const photList = await listAll(imagesFolder);

    for(let i in photList.items) {
        let photoURL = await getDownloadURL(photList.items[i]);

        list.push({
            name:photList.items[i].name,
            url: photoURL

        });
    }

    return list;
}


export const insert = async (file:File) =>{
    //Verificar se é imagem
    if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
        let randomName = createId(); //Criar nome aleatório pra não substituir o arquivo
        let newFile = ref(storage, `imagens/${randomName}`);
        let upload = await uploadBytes(newFile, file);
        let photourl = await getDownloadURL(upload.ref);

        return {
            name: upload.ref.name,
            url:photourl

        } as Photo
        
    }else{
        return new Error('Tipo de arquivo não permitido');
    }
}

//Para fazer alguma coisa no store, primeiramente precisamos fazer referência ou endereço

//listAll: essa função é do próprio firebase

// const imagesFolder = ref(storage, "images" ) Referencia da pasta