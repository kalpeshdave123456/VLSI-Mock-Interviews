# GitHub Pages deployment

1. Create a new GitHub repository.
2. Upload all files from this folder to the repository root.
3. In GitHub, open **Settings -> Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Save. GitHub will publish the site.

## Notes
- Keep the file structure unchanged.
- The app uses local JavaScript data files and a service worker.
- For local testing, open `index.html` directly or use a simple static server.
