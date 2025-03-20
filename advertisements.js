const advertisementsData = [
    {
        title:'Ad 1',
        description:'This is the first advertisement.',
        image: 'https://placehold.co/150X150',
        contact: 'contact1@example.com'
    },
    {
        title:'Ad 2',
        description:'This is the second advertisement.',
        image: 'https://placehold.co/150X150',
        contact: 'contact2@example.com'
    },
    {
        title:'Ad 3',
        description:'This is the third advertisement.',
        image: 'https://placehold.co/150X150',
        contact: 'contact3@example.com'
    },
    {
        title:'Ad 4',
        description:'This is the fourth advertisement.',
        image: 'https://placehold.co/150X150',
        contact: 'contact4@example.com'
    },
    {
        title:'Ad 5',
        description:'This is the fifth advertisement.',
        image: 'https://placehold.co/150X150',
        contact: 'contact5@example.com'
    },
    {
        title:'Ad 6',
        description:'This is the sixth advertisement.',
        image: 'https://placehold.co/150X150',
        contact: 'contact6@example.com'
    }
  ];
  
  const renderAdCard = (ad) => {
    //create card
    const card = document.createElement("div");
    card.classList.add("card","col-md-4","mb-4");
  
    //create img
    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = ad.image;
    img.alt = "image";
  
    //create card  body
    const body = document.createElement("div");
    body.classList.add("card-body");
  
    // create card title
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = ad.title;
  
    //create card desccription
    const desc = document.createElement("p");
    desc.classList.add("card-text");
    desc.textContent = ad.description;
  
    //create contact
    const contact = document.createElement("p");
    contact.classList.add("card-text");
    contact.textContent = "Contact: ***";
     //create toggle checkbox to hide/view contact
    // Create a checkbox element
    const chkBox = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `toggleContact-${ad.title.replace(/\s/g, '')}`;  // Set an ID
  
    // Create a label for the checkbox
    const label = document.createElement("label");
    label.htmlFor = checkbox.id; // Associate label with checkbox
    label.textContent = "View Contact";
  
    // Append checkbox and label to the document
    chkBox.appendChild(checkbox);
    chkBox.appendChild(label);
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            contact.textContent = "Contact: "+ad.contact;
        } else {
            contact.textContent = "Contact: ***";
        }
    });
  
    body.appendChild(title);
    body.appendChild(desc);
    body.appendChild(contact);
    body.appendChild(chkBox);
  
    //create button in card footer
    const footer = document.createElement("div");
    footer.classList.add("card-footer", "text-center");
  
    const adBtn = document.createElement("button");
    adBtn.classList.add("btn", "btn-info");
    adBtn.textContent = "Details";
    adBtn.addEventListener("click", function () {
        alert("Contact details: "+ad.contact);
    });
  
    footer.appendChild(adBtn);
  
    //append img, body and footer to card
    card.appendChild(img);
    card.appendChild(body);
    card.appendChild(footer);
  
    return card;
  }
  
  const displayAds= (filter) => {
    const adContainer = document.getElementById("advertisements");

    adContainer.innerHTML = "";

    const filteredAds = filter
        ? advertisementsData.filter(ad => ad.title.toLowerCase().includes(filter))
        : advertisementsData;

    filteredAds.forEach((ad) =>  {
        adContainer.appendChild(renderAdCard(ad));
    });
  }
  
  
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Hi");
    displayAds("");
  });
  
  document.getElementById("inputFilter").addEventListener("input", function () {
    const filter = this.value.toLowerCase().trim();
    displayAds(filter);
  });
  