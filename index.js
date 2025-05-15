
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://senac:!Aula%40123@appmongo.kz6ejpl.mongodb.net/?retryWrites=true&w=majority&appName=AppMongo";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const dbname = "dados";

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const database = client.db(dbname);
        const collection = database.collection("DadosUsuario");

        //CRUD
        //Inserir ------------------------------------------------------
        const novoUsuario = {
            nome: "Melao",
            email:"melao@melao.com",
            idade: 22,
            estado: "SP",
            cidade: "Campinas"
        };

        // Insert a single document
        //const inserirDados = await collection.insertOne(novoUsuario);
        //console.log("Usuario inserido com sucesso:", inserirDados);

        // Leitura ------------------------------------------------------
        //const todosUsuarios = await collection.find({}).toArray();
        //console.log("Todos os usuarios:", JSON.stringify(todosUsuarios, null, 2));

        // Leitura com filtro ----------------------------------------
        //const usuarioFiltrado = await collection.findOne({ nome: "Banana" });
        //console.log("Usuario filtrado:", JSON.stringify(usuarioFiltrado, null, 2));

        // Atualizar ------------------------------------------------------
        //const filtro = { nome: "Melao" };
        //const dadosFiltro = {
        //    $set: {
        //        nome: "Jabutiii",
        //        idade: 99,
        //    }
        //};

        //const upUsuario = await collection.updateOne(filtro, dadosFiltro);
        //const usuarioFiltrado = await collection.findOne({ nome: "Jabutiii" });
        //console.log("Usuario filtrado:", JSON.stringify(usuarioFiltrado, null, 2));

        // Deletar ------------------------------------------------------
        const filtroDel = {id: 42};
        const deletarUsuario = await collection.deleteOne(filtroDel);
        console.log("Usuario deletado com sucesso:", deletarUsuario);
    
    } catch (erro) {
        console.error("Erro ao conectar ao banco de dados:", erro);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
