const username = "divyashreepalraj";

const profileURL = `https://api.github.com/users/${username}`;

const repoURL = `https://api.github.com/users/${username}/repos?sort=updated&per_page=3`;

async function loadGithub() {
    try {
        const profileResponse = await fetch(profileURL);

        const profile = await profileResponse.json();

        document.getElementById("github-avatar").src = profile.avatar_url;

        document.getElementById("github-name").textContent = profile.name;

        document.getElementById("github-bio").textContent = profile.bio || "";

        document.getElementById("repo-count").textContent = profile.public_repos;

        document.getElementById("followers").textContent = profile.followers;

        document.getElementById("following").textContent = profile.following;

        document.getElementById("github-link").href = profile.html_url;
    } catch (error) {
        console.log(error);
    }

    // try{

    //     const repoResponse =
    //         await fetch(repoURL);

    //     const repos =
    //         await repoResponse.json();

    //     const container =
    //         document.getElementById("repo-container");

    //     container.innerHTML="";

    //     repos.forEach(repo=>{

    //         const card =
    //             document.createElement("div");

    //         card.className="repo-card shimmer";

    //         card.innerHTML=`

    //             <h4>${repo.name}</h4>

    //             <p>

    //             ${
    //                 repo.description ??
    //                 "No description provided."
    //             }

    //             </p>

    //             <div class="repo-info">

    //                 <span>

    //                 ${repo.language ?? "Unknown"}

    //                 </span>

    //                 <span>

    //                 ⭐ ${repo.stargazers_count}

    //                 </span>

    //             </div>

    //             <a
    //                 href="${repo.html_url}"
    //                 target="_blank">

    //                 Open Repository →

    //             </a>

    //         `;

    //         container.appendChild(card);

    //     });

    // }

    // catch(error){

    //     console.log(error);

    // }

    // show only 3 repositories
    try {
        const repoResponse = await fetch(repoURL);
        const repos = await repoResponse.json();

        const container = document.getElementById("repo-container");
        container.innerHTML = "";

        repos.forEach((repo) => {
            const card = document.createElement("div");

            card.className = "repo-card shimmer";

            card.innerHTML = `
            <div class="repo_details">
            <h4>${repo.name}</h4>

            <p>
                ${repo.description ?? "No description provided."}
            </p>
            </div>

            <a href="${repo.html_url}" target="_blank">
                Open Repository →
            </a>
        `;

            container.appendChild(card);
        });

        // add this span section for star  View and language
        // <div class="repo-info">
        //     <span>${repo.language ?? "Unknown"}</span>
        //     <span>⭐ ${repo.stargazers_count}</span>
        // </div>





        // Total Stars
        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

        console.log("Total Stars:", totalStars);

        // See More Button
        // const seeMore = document.createElement("a");

        // seeMore.href = `https://github.com/${username}?tab=repositories`;
        // seeMore.target = "_blank";
        // seeMore.className = "btn btn-primary magnetic git_rep";
        // seeMore.textContent = "See More Repositories →";

        // container.appendChild(seeMore);
    } catch (error) {
        console.log(error);
    }
}

document.addEventListener("DOMContentLoaded", loadGithub);

const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
