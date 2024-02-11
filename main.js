let input = document.querySelector(".get-repos input");
let get = document.querySelector(".get-button");
let show = document.querySelector(".show-data");
input.focus();
get.onclick = function () {
    getrepos();
};
function getrepos() {
    if (input.value == "") {
        show.innerHTML = "<span>Please Write Github Username.</span>"
    } else {
        fetch(`https://api.github.com/users/${input.value}/repos`).then((res) => res.json())
            .then((reso) => {
                show.innerHTML = "";
                for (let i = 0; i < reso.length; i++) {
                    let mdiv = document.createElement("div");
                    mdiv.append(reso[i].name);
                    let url = document.createElement("a");
                    url.append("Visit");
                    url.href = `https://github.com/${input.value}/${reso[i].name}`;
                    url.setAttribute("target", "_blank");
                    mdiv.appendChild(url);
                    let stars = document.createElement("span");
                    let starstext = document.createTextNode(`Stars ${reso[i].stargazers_count}`)
                    stars.appendChild(starstext);
                    mdiv.appendChild(stars);
                    mdiv.className = "repo-box";
                    show.appendChild(mdiv);
                }
                input.value = "";
            })
    }
};
