
const loadCatagories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayPets(data.categories))
    .catch((error) => console.log(error))
    
}
const loadPets = () =>{
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayPhotos(data.pets))
    .catch((error) => console.log(error))
}
const loadCategoryPets = (id) =>{
    //alert(id);
    if(id==1){
        fetch(`https://openapi.programming-hero.com/api/peddy/category/cat`)
        .then((res) => res.json())
    .then((data) => displayPhotos(data.data))
    .catch((error) => console.log(error))    
    }else if(id==2){
        fetch(`https://openapi.programming-hero.com/api/peddy/category/dog`)
        .then((res) => res.json())
    .then((data) => displayPhotos(data.data))
    .catch((error) => console.log(error))
    }else if(id==3){
        fetch(`https://openapi.programming-hero.com/api/peddy/category/rabbit`)
        .then((res) => res.json())
    .then((data) => displayPhotos(data.data))
    .catch((error) => console.log(error))
    }
    else if(id==4){
        fetch(`https://openapi.programming-hero.com/api/peddy/category/bird`)
        .then((res) => res.json())
    .then((data) => displayPhotos(data.data))
    .catch((error) => console.log(error))
    }
}
// Demo Category
//     {
//         "id": 1,
//         "category": "Cat",
//         "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
//     }

//another Object
// {
//     "petId": 1,
//     "breed": "Golden Retriever",
//     "category": "Dog",
//     "date_of_birth": "2023-01-15",
//     "price": 1200,
//     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     "gender": "Male",
//     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Sunny"
// }

displayPhotos = (pets) =>{
    const petContainer = document.getElementById("pets-photos")
    petContainer.innerHTML = "";

    // //for the birds category where there is no data
    // if(pets.lenght == 0){
    //     petContainer.innerHTML = "No Content Here"
    //     return;
    // }

    pets.forEach (pet =>{
        console.log(pet);
        const card = document.createElement("div");
        card.classList = "card border-2";
        card.innerHTML = `
        <figure class="px-5 pt-5">
             <img
             src=${pet.image};
             alt="Shoes"
             class="rounded-xl object-cover" />
        </figure>
        <div class="md:px-6 md:py-3  ">
             <div>
               <h1 class="font-bold md:py-2">${pet.pet_name}</h1>
               <h3 class="text-sm">Breed: ${pet.breed}</h3>
               <h3 class="text-sm">Birth: ${pet.date_of_birth}</h3>
               <h3 class="text-sm">Gender: ${pet.gender}</h3>
               <h3 class="text-sm ">Price: ${pet.price}</h3>
             </div>
             <div class="flex justify-center md:gap-5 md:my-3">
               <button class="rounded border bg-gray-300 md:px-10 md:py-1 hover:bg-green-600">Adopt</button>
               <button class="rounded border bg-gray-300 md:px-10 md:py-1 hover:bg-green-600">Details</button>
             </div>
        </div>
    </div>
        `
        petContainer.append(card);


    })
}  
displayPets =(data) =>{
    //console.log(data);
    const catagoryContainer = document.getElementById("buttons")

    data.forEach ((item) => {
        console.log(item)

        

        const buttonContainer = document.createElement("div");
        buttonContainer.classList = "mb-4";
        // buttonContainer.innerHTML =
        // `
        // <button class="btn btn-outline md:w-[250px] md:text-lg md:py-3 flex items-center md:gap-3">
        
        // </button>
        // `
        //creating a button
        const button = document.createElement("button");
        button.classList ="btn btn-outline md:w-[250px] md:text-lg md:py-3 flex items-center md:gap-3 ";
        button.innerHTML = `
      ${item.category} 
      <img src="${item.category_icon}" class="w-6 h-6 ml-2" alt="icon">
    `; 
    button.setAttribute("onclick", `loadCategoryPets(${item.id})`);

    

        //button.append(icon);
        buttonContainer.append(button);
        //append to the container
        catagoryContainer.append(buttonContainer);
    })

    
}


loadCatagories();
loadPets();