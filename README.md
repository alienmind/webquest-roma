# WebQuest: Escritores de la Antigua Roma (LLM-Generated Demo)

## Description

This project is an interactive WebQuest focused on the writers of Ancient Rome, presented as an interactive slideshow using Reveal.js. It serves as a demonstration of **"vibe coding"** – creating a functional web application almost entirely through conversational prompting with advanced Large Language Models (LLMs), with virtually **zero lines of code manually written** by the user.

## Inspiration

The idea for this project originated from a creative exploration inspired by a job assignment related to a partner's PhD in Latin Studies. The goal was to build something engaging and educational using only AI-driven development techniques.

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

## How to Run

1.  Ensure you have the `index.html` file and the `img/` folder (containing `roma.jpg`, `virgilio.jpg`, `ciceron.jpg`, `biblioteca.jpg`) in the same directory.
2.  Simply open the `index.html` file in a modern web browser (like Chrome, Firefox, Edge, Safari).
3.  No build process or local server is strictly necessary, although running via a simple local server (`npx http-server .` or `python -m http.server`) can sometimes avoid potential browser security restrictions with local file access if issues arise.

## Acknowledgements

*   Inspired by the academic work of **Eva Margarita García**.
*   Code entirely generated through collaboration with advanced AI models.