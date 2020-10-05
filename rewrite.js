

class PerfectLife {

    constructor (home, annualsalary, wife, happiness) {

        this.home = home;
        this.annualsalary = annualsalary; 
        this.wife = wife;
        this.happiness = happiness;
    }
}

class UI {

    displayPerfectLife(PerfectLife) {

        const tableBody = document.getElementById('tablebody');
        const listing = document.createElement('tr');
        listing.innerHTML = `<td>${PerfectLife.home}</td><td>${PerfectLife.annualsalary}</td><td>${PerfectLife.wife}</td><td>${PerfectLife.happiness}</td> <td><a href="" class="delete">X</a></td>`;

        tableBody.appendChild(listing);
    }

    validation(message, styling){

            const container = document.querySelector('.container');
            const form = document.getElementById('form');

            const outputDiv = document.createElement('div');
            const outputContent = document.createTextNode(message);
            outputDiv.appendChild(outputContent);
            outputDiv.className = `alert ${styling}`;

            container.insertBefore(outputDiv,form);
            
            setTimeout(function(){
                outputDiv.remove();
            },3000);       
    }

    clearFields(){
        document.getElementById('home').value = '';
        document.getElementById('annualsalary').value = '';
        document.getElementById('wife').value = '';
        document.getElementById('happiness').value = '';
    }

    deleteManifestation(target){
        
        if(target.className =='delete'){
            target.parentElement.parentElement.remove();
        }
    }
}


document.getElementById('submit').addEventListener('click', function(ev) {
    
    ev.preventDefault();

    const home = document.getElementById('home').value;
    const annualsalary = document.getElementById('annualsalary').value;
    const wife = document.getElementById('wife').value;
    const happiness = document.getElementById('happiness').value;

    const perfectLife = new PerfectLife(home,annualsalary,wife,happiness);

    const ui = new UI;

    if(home == '' || annualsalary == '' || wife == '' || happiness == '') {
        ui.validation("Please fill out all the fields to manifest your life", "failed");
    }else {
        ui.displayPerfectLife(perfectLife);
        ui.validation("You have succesfully manifested your life", "success");
        ui.clearFields();
    }
});


document.querySelector('#tablebody').addEventListener('click',function(ev){

    ev.preventDefault();
    const ui = new UI;

    ui.deleteManifestation(ev.target);
    console.log(ev.target);
});