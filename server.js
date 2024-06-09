const express = require("express")
const cors = require("cors")
const app = express();
app.use(cors())

app.get("/employes", (req, res) => {
    const employes = [
        {
            "_id": "e1",
            "nomEmp": "Lamrabet",
            "prenomEmp": "Oussama",
            "poste": "Directeur",
            "departement": {
                "codeDep": "1",
                "nomDep": "RH"
            }
        },
        {
            "_id": "e2",
            "nomEmp": "Bennani",
            "prenomEmp": "Amina",
            "poste": "Manager",
            "departement": {
                "codeDep": "2",
                "nomDep": "Finance"
            }
        },
        {
            "_id": "e3",
            "nomEmp": "El Amrani",
            "prenomEmp": "Youssef",
            "poste": "Analyste",
            "departement": {
                "codeDep": "3",
                "nomDep": "Marketing"
            }
        },
        {
            "_id": "e4",
            "nomEmp": "Cherkaoui",
            "prenomEmp": "Fatima",
            "poste": "Chef de projet",
            "departement": {
                "codeDep": "4",
                "nomDep": "IT"
            }
        },
        {
            "_id": "e5",
            "nomEmp": "El Idrissi",
            "prenomEmp": "Khalid",
            "poste": "Développeur",
            "departement": {
                "codeDep": "5",
                "nomDep": "Développement"
            }
        },
        {
            "_id": "e6",
            "nomEmp": "Dahbi",
            "prenomEmp": "Houssam",
            "poste": "Développeur Full Stack",
            "departement": {
                "codeDep": "6",
                "nomDep": "Développement"
            }
        },
    ]
    res.json(employes)
})

app.listen(8000, () => {
    console.log("server Running on port 8000");
})