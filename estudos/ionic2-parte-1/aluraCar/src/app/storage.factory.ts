import { Storage } from '@ionic/storage';

export class StorageFactory {

    static createStorage() {
        return new Storage(['indexeddb'], {
            // nome do banco
            name: 'aluracar',
            // nome da "store" (tabela)
            storeName: 'agendamentos'
        });
    }
}