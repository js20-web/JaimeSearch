document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('searchInput').value;
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.location.href = searchUrl;
});
