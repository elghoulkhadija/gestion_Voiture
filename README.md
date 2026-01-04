# 🚗 Gestion de Location de Voitures — React + Redux Toolkit

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue" />
  <img src="https://img.shields.io/badge/Redux%20Toolkit-%F0%9F%93%8C-purple" />
  <img src="https://img.shields.io/badge/TailwindCSS-%F0%9F%92%99-38B2AC" />
</p>

---

## 🎯 Objectif du projet

Application simple pour gérer la **location de voitures** :

✔ Sélectionner un client  
✔ Louer une voiture  
✔ Retourner une voiture  
✔ Mise à jour automatique de l’état grâce à **Redux Toolkit**

---

## 🏗️ Architecture Redux

### 🏎️ Cars Slice

<code style="color:#22c55e">status: "available"</code> ➜ voiture libre  
<code style="color:#ef4444">status: "rented"</code> ➜ voiture louée  

Actions :

- `selectCard`
- `rentCard`
- `returnCar`

---

### 👤 Clients Slice

Chaque client peut avoir :

Actions :

- `selectClient`
- `assignCarToClient`
- `removeCarFromClient`

🚀 Lancer l’application
       npm start

📂 Structure principale
src/
 ├── components/
 │    └── ClientAndCars.js
 ├── reducers/
 │    ├── carsSlice.js
 │    └── clientsSlice.js
 ├── store.js
 └── App.js
