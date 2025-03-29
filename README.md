# WebQuest: Escritores de la Antigua Roma (LLM-Generated Demo)

**🚀 Live Demo:** [**View the interactive presentation here**](https://alienmind.github.io/webquest-roma/)

## Description

This project is an interactive WebQuest focused on the writers of Ancient Rome, presented as an interactive slideshow using Reveal.js. It serves as a demonstration of **"vibe coding"** – creating a functional web application almost entirely through conversational prompting with advanced Large Language Models (LLMs), with virtually **zero lines of code manually written** by the developer.

## Inspiration

The idea for this project originated from a creative exploration inspired by a job assignment related to a partner's PhD in Latin Studies. The goal was to build something engaging and educational using only AI-driven development techniques.

The game is in Spanish (and Latin) originally as that's a requirement for the assignment, but feel free to LLM the shit out of it to translate to any other language ;-)

## Methodology: The "Vibe Coding" Experiment

This WebQuest was developed iteratively by interacting with sophisticated LLMs (like models developed by Anthropic and Google). The process involved:

1.  **High-Level Prompting:** Defining the project goal (a Reveal.js WebQuest), the topic (Roman Writers), and desired features (interactivity, specific game types).
2.  **Iterative Refinement:** Providing feedback on the generated code, pointing out bugs (like broken layouts or non-functional games), requesting specific visual styles, and asking for alternative game mechanics.
3.  **Prompting Techniques:** Employing various conversational strategies, including:
    *   **Expressing Gratitude:** Frequently thanking the LLM for its efforts.
    *   **Constructive Criticism (with flair):** Highlighting issues by playfully attributing poor results to hypothetical "other LLMs" to encourage the current model to "fix" or "outperform" the supposed previous attempt.
    *   **Detailed Instructions:** Specifying exact changes needed for HTML structure, CSS styling, and JavaScript logic.

This approach simulated a collaborative coding session, relying on the LLM's ability to understand requirements, generate code, and debug based on feedback.

## Technical Implementation Details

*   **Framework:** [Reveal.js](https://revealjs.com/) (v4.1.0 loaded via CDN) for the slideshow structure and navigation.
*   **Architecture:** A single, self-contained `index.html` file including all HTML structure, CSS styles, and JavaScript logic.
*   **Styling:** Embedded CSS using a `<style>` block. It utilizes the `league.min.css` theme as a base but includes significant overrides for layout, colors, game styling, and responsiveness adjustments.
*   **Interactivity:** All interactive elements and mini-games are implemented using **Vanilla JavaScript**, directly embedded within `<script>` tags in the HTML file.
*   **Dependencies:** Relies on CDN-hosted versions of Reveal.js and its plugins (Markdown, Highlight, Notes).
*   **Content:** Focused on key Roman writers: Virgil, Cicero, Ovid, Seneca, and Plauto.

## Tools used

*   **IDE:** [Cursor](https://cursor.sh/) - An AI-first code editor.
*   **LLMs:**
    *   [Claude](https://claude.ai/) (Anthropic)
    *   [Gemini](https://deepmind.google/technologies/gemini/) (Google)
*   **Platform:** [Google AI Studio](https://aistudio.google.com/) - Used for interacting with Gemini models.

## Features & Mini-Games

The WebQuest includes several interactive challenges:

1.  **Drag & Drop Cloze:** Complete sentences about Virgil's *Aeneid* by dragging keywords.
2.  **Sortable List:** Order key events from Cicero's life chronologically via drag and drop.
3.  **Memory Match:** Flip cards to match Roman writers with their famous works.
4.  **Word Search:** Find relevant Latin terms (POETA, LIBER, etc.) hidden in a grid.
5.  **Click-to-Match:** Connect writers to their primary literary influence or legacy by clicking pairs.
6.  **Vertical Slides:** Solutions/explanations for challenges are presented on vertical slides accessed via the down arrow.
7.  **Custom Styling:** Includes emoji-based separators (🏛️) for headings and specific author name styling.
8.  **Easter Egg:** Triple-clicking "Jaime López" in the final slide triggers an animation of multiple heart emojis popping up.

## How to Run Locally

1.  Ensure you have the `index.html` file and the `img/` folder (containing `roma.jpg`, `virgilio.jpg`, `ciceron.jpg`, `biblioteca.jpg`) in the same directory.
2.  Simply open the `index.html` file in a modern web browser (like Chrome, Firefox, Edge, Safari).
3.  No build process or local server is strictly necessary, although running via a simple local server (`npx http-server .` or `python -m http.server`) can sometimes avoid potential browser security restrictions with local file access if issues arise.

## Deploying to GitHub Pages

This project is ideal for deployment using GitHub Pages, allowing you to share the live, interactive presentation easily.

1.  **Push to GitHub:** Make sure your `index.html` file and the `img` folder are pushed to your GitHub repository.
2.  **Enable GitHub Pages:**
    *   Navigate to your repository on GitHub.com.
    *   Go to the "Settings" tab.
    *   In the left sidebar, click on "Pages".
    *   Under the "Build and deployment" section:
        *   Set the "Source" to "Deploy from a branch".
        *   Choose the branch containing your code (e.g., `main` or `master`).
        *   Select the folder `/ (root)`.
        *   Click "Save".
3.  **Wait for Deployment:** GitHub Actions will build and deploy your site. This usually takes 1-2 minutes.
4.  **Access Your Site:** Once deployed, the Pages settings page will display the public URL (like `https://<your-username>.github.io/<repository-name>/`). You can visit this URL to see the live presentation. The URL for this specific repository is: [https://alienmind.github.io/webquest-roma/](https://alienmind.github.io/webquest-roma/)

## Acknowledgements

*   Inspired by the academic work of <a href="mailto:abrenoite@gmail.com">Eva</a>.
*   Code entirely generated through collaboration with advanced AI models.

## Thoughts on the Future of LLM Coding

My personal take on the rise of LLMs in software development is one of cautious optimism tempered with important considerations. These AI models are undeniably powerful tools, capable of accelerating development, automating repetitive tasks, and generating boilerplate code with remarkable speed. This "vibe coding" experiment itself showcases how far one can get with minimal direct coding intervention.

However, this doesn't eliminate the need for strong computer science fundamentals and deep domain knowledge. If anything, it might heighten it. Effectively leveraging LLMs requires the ability to precisely define problems, architect robust solutions, critically evaluate the generated code for correctness, security, and efficiency, and debug complex issues that the AI might introduce or fail to solve. The developer's role seems poised to shift – less focus on the *act* of typing syntactically correct code, and more emphasis on high-level design, architectural integrity, clear requirement specification, and rigorous validation.

This shift introduces a significant question regarding the future of professional development in the field. Many of us currently in senior or architectural roles progressed through stages, starting as junior developers learning the ropes by tackling precisely the kind of tasks LLMs are becoming adept at handling. If the demand for traditional junior-level coding diminishes, how do we cultivate the next generation of senior engineers and architects? What will the learning curve look like? How do we ensure that future developers gain the foundational experience necessary to build deep expertise and intuition? Maintaining engagement and fostering that critical pipeline of talent in an AI-augmented landscape is a challenge we'll need to navigate. Only time will tell how the profession adapts and what new paths emerge for aspiring developers.