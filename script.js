const downloadBtn = document.getElementById('download');
const status = document.getElementById('status-title');
const peopleInfo = document.querySelector('.info');
const link = 'https://randomuser.me/api';


const getPeopleInfo = async () => {
    let part = '';

    for (let i = 0; i < 5; i++) {
        let result = await fetch(link).then(res => res.json()).catch(e => alert(e));
        let info = result.results[0];
        let personInfo = {
            picture: info.picture.large,
            name: info.name,
            cell: info.cell,
            country: info.location.country,
            email: info.email,
            coordinates: info.location.coordinates
        }

        part += `
        <div class = "person-block">
            <img src=${personInfo.picture}>
            <p>Name: ${personInfo.name.first} ${personInfo.name.last}</p>
            <p>Cell: ${personInfo.cell}</p>
            <p>Country: ${personInfo.country}</p>
            <p>Email: ${personInfo.email}</p>
            <p>Coordinates: ${personInfo.coordinates.latitude}; ${personInfo.coordinates.longitude}</p>
        </div>
        `;
    }

    status.style.display = "block";
    peopleInfo.innerHTML = part;
}

downloadBtn.addEventListener('click', getPeopleInfo);