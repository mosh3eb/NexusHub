// Add interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Like button functionality
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            if (this.querySelector('i').classList.contains('far')) {
                this.querySelector('i').classList.replace('far', 'fas');
                let count = this.querySelector('span');
                if (count.innerText.includes('k')) {
                    let num = parseFloat(count.innerText) + 0.1;
                    count.innerText = num.toFixed(1) + 'k';
                } else {
                    count.innerText = (parseInt(count.innerText) + 1).toString();
                }
            } else {
                this.querySelector('i').classList.replace('fas', 'far');
                let count = this.querySelector('span');
                if (count.innerText.includes('k')) {
                    let num = parseFloat(count.innerText) - 0.1;
                    count.innerText = num.toFixed(1) + 'k';
                } else {
                    count.innerText = (parseInt(count.innerText) - 1).toString();
                }
            }
        });
    });

    // Post creation
    const postInput = document.querySelector('.post-input');
    const postBtn = document.querySelector('.post-btn');
    
    postBtn.addEventListener('click', () => {
        if (postInput.value.trim()) {
            const newPost = document.createElement('div');
            newPost.className = 'post';
            newPost.innerHTML = `
                <div class="post-header">
                    <img src="https://picsum.photos/50/50?random=12" alt="User" class="post-avatar">
                    <div class="post-user-info">
                        <h4>You</h4>
                        <span>Just now</span>
                    </div>
                </div>
                <div class="post-content">
                    <p>${postInput.value}</p>
                </div>
                <div class="post-actions-bar">
                    <div class="action-btn">
                        <i class="far fa-heart"></i>
                        <span>0</span>
                    </div>
                    <div class="action-btn">
                        <i class="far fa-comment"></i>
                        <span>0</span>
                    </div>
                    <div class="action-btn">
                        <i class="far fa-share-square"></i>
                        <span>Share</span>
                    </div>
                </div>
            `;
            document.querySelector('.create-post').insertAdjacentElement('afterend', newPost);
            postInput.value = '';
        }
    });

    // Story hover effect
    document.querySelectorAll('.story').forEach(story => {
        story.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        story.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Menu item hover effect
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.background = 'rgba(110, 58, 219, 0.1)';
        });
        item.addEventListener('mouseout', function() {
            this.style.background = 'transparent';
        });
    });
});