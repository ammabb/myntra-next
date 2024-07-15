document.addEventListener('DOMContentLoaded', function() {
    // Mock influencer data (replace with actual data retrieval logic)
    const influencerData = {
        name: 'Influencer Name',
        handle: '@influencerhandle',
        followers: '100k',
        profileImage: 'https://via.placeholder.com/150',
        latestOutfitImage: 'https://via.placeholder.com/300',
        outfitDescription: 'Description of the outfit or product'
    };

    // Function to display influencer profile and latest outfit
    function displayInfluencerData() {
        const profileInfo = document.querySelector('.profile-info');
        const latestOutfit = document.querySelector('.latest-outfit');

        profileInfo.innerHTML = `
            <img src="${influencerData.profileImage}" alt="Influencer Profile Image">
            <h2>${influencerData.name}</h2>
            <p>${influencerData.handle}</p>
            <p>Followers: ${influencerData.followers}</p>
        `;

        latestOutfit.innerHTML = `
            <h3>Latest Outfit</h3>
            <img src="${influencerData.latestOutfitImage}" alt="Latest Outfit">
            <p>${influencerData.outfitDescription}</p>
            <div class="comments-section">
                <h3>Comments</h3>
                <div id="commentsList"></div>
                <form id="comment-form">
                    <input type="text" id="comment-input" placeholder="Add a comment...">
                    <button type="submit">Post</button>
                </form>
            </div>
        `;
    }

    // Display initial influencer data
    displayInfluencerData();

    // Function to handle form submission for adding comments
    const commentForm = document.getElementById('comment-form');
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const commentInput = document.getElementById('comment-input');
        const commentText = commentInput.value.trim();
        
        if (commentText !== '') {
            addComment(commentText);
            commentInput.value = '';
        }
    });

    // Function to add a new comment dynamically
    function addComment(commentText) {
        const commentsList = document.getElementById('commentsList');
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
            <div class="commenter-info">
                <img src="https://via.placeholder.com/50" alt="User Avatar">
                <p>User123</p>
            </div>
            <p class="comment-text">${commentText}</p>
        `;
        commentsList.appendChild(commentDiv);
    }

    // Functionality for toggling dropdown menu in header
    const dropdownBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            const dropdowns = document.getElementsByClassName('dropdown-content');
            for (let i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };
});
