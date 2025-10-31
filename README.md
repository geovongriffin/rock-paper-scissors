# 🎮 Rock, Paper, Scissors — JS Game Logic (Mini Project)

Work with a partner to build a fully interactive **Rock, Paper, Scissors** game using JavaScript.  
Your program will track scores, use loops, and interact with the player using browser prompts and alerts.

---

## 👤 User Story

> **As a player,**  
> I want to play Rock, Paper, Scissors against the computer,  
> so that I can see who wins each round and track my results over time.

---

## ✅ Acceptance Criteria

- **It’s done when** the player can enter `R`, `P`, or `S` to make a choice.  
- **It’s done when** the computer randomly selects between `R`, `P`, and `S`.
- **It’s done when** the result (win, lose, or tie) is displayed after each round.  
- **It’s done when** the player can choose to play again or quit.  
- **It’s done when** the program tracks the total number of wins, losses, and ties.  
- **It’s done when** the program tracks how many times the player has chosen Rock, Paper, or Scissors.  
- **It’s done when** the game displays a final summary of statistics when the player quits.

---

## 🧱 Your Task

- Play 1 round of Rock Paper Scissors and ask to keep playing until the user decides to stop.  
- Store all player statistics inside an **object** (wins, losses, ties, and individual choices).  
- Use `window.prompt()` to get user input and `window.alert()` to display results.  
- Convert user input to **uppercase** to make comparisons consistent.  
- Validate user input so that only `R`, `P`, or `S` are accepted.  
- Use `Math.random()` to randomly select a choice for the computer.  
- Compare choices using conditional statements to determine who wins each round.  
- Ask the player whether they want to **play again** with `window.confirm()`. 
- When the player quits, display a clear **final summary** of their results.

---

## 💡 Hints

- Store valid options in an array like `["R", "P", "S"]`.  
- Use an object to track how many times each option was chosen by the player.  
- Increment counters inside your game loop whenever a win, loss, or tie occurs.  
- Create a **mapping** (e.g., `{ R: "Rock", P: "Paper", S: "Scissors" }`) to make output messages more readable.  
- Use **template literals** (backticks \`) to build your result strings dynamically.  
- Add **emojis or symbols** (🪨 📄 ✂️) to make your messages more engaging.  

---

## 🧠 Bonus Challenges

- Track **win percentage** for the player.  
- Add **sound effects** or images if you move this to an HTML page later.  
- Implement **score persistence** using `localStorage` so results remain between sessions.  
- Create a **leaderboard system** that logs total games played across multiple users.  

---

## ✅ Quick Checklist

- [ ] Prompts player for `R`, `P`, or `S`  
- [ ] Generates a random computer choice  
- [ ] Displays round results via alerts  
- [ ] Tracks wins, losses, ties, and individual choice counts  
- [ ] Asks if player wants to continue  
- [ ] Displays a final stats summary when the player quits  
- [ ] (Bonus) Adds win percentage or persistent stats  

