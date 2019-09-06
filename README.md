# Super Secret Society Bros.

A 2-player online bullet hell game driven by music.

**Game Genres:** Bullet-Hell, Arcade, Co-op, Rhythm, Top-Down Shooter

### Game Instructions

Please check the _Instructions_ screen from the game's main menu — it is much clearer with images (and I spent a lot of time on it).

### Game Features

- 2 players are required for each game — each has their own:
    - **Character**: can move left, right, up, down, or diagonally.
    - **Score**: each player gets their own score, though the final score is summed up.
    - **Hearts**: starts with 3, dies at 0. Can continue moving after death, but cannot use their weapon until they pick up an extra heart and come back to life.
    - **Specials**: starts at 3, can be used at any time after a certain amount of time from the last special used. Can be replenished by picking up an extra special.
    - **Weapon**: each player has their own weapon, which can be switched by picking up power-ups.
    - The latter 4 are all displayed and updated on the gameplay UI, on either side of the screen.
- A total of 4 weapon types with animated bullets:
    - **Blaster**: the standard weapon. Moderate firing frequency, moderate bullet speed, moderate damage.
    - **Laser**: the fast-shooting weapon. High firing frequency, fast bullet speed, low damage.
    - **Splitter**: the multi-shot weapon. Each shot spreads out 3 bullets travelling at different angles. Moderate firing frequency, moderate bullet speed, low damage per bullet.
    - **Cannon**: the piercing weapon. Each shot travels through enemies instead of disappearing after hitting an enemy. Low firing frequency, low bullet speed, high damage.
- Each weapon type has a special move:
    - **Blaster**: a shotgun blast of a large barrage of bullets with a very randomized scatter.
    - **Laser**: two rows of lasers in an arrow formation.
    - **Splitter**: a wide spread of bullets that fans out as it travels further.
    - **Cannon**: one mega-sized cannon bullet that almost instantly destroys everything in its path.
- A total of 6 animated power-ups:
    - **Extra heart**: replenishes a heart when picked up, if missing at least one heart.
    - **Extra special**: replenishes a special when picked up, if missing at least one special.
    - **Weapon Switch – Blaster**: switches the player's weapon to the Blaster when picked up.
    - **Weapon Switch – Laser**: switches the player's weapon to the Laser when picked up.
    - **Weapon Switch – Splitter**: switches the player's weapon to the Splitter when picked up.
    - **Weapon Switch – Cannon**: switches the player's weapon to the Cannon when picked up.
- A total of 4 animated enemy types:
    - **Mobs**: appears in large quantities and sways left and right while falling down at a moderate speed. Low HP._Purpose: Makes the battlefield more crowded and dynamic._
    - **Drifters**: drifts left and right at quick speeds while falling down at a moderate speed. Moderate HP. _Purpose: Prevents players from camping in one spot without moving, since they strike from the side._
    - **Schemers**: slowly becomes near-transparent and grows larger. Shrinks and increases full visibility every time it is shot. Slow fall speed, high HP. _Purpose: Challenges the players to keep all parts of the battlefield covered, lest a Schemer grow too large and sneakily strike from the side._
    - **Chargers**: drops straight down, but picks up speed very quickly. Loses speed every time it is shot. Very fast fall speed, high HP. _Purpose: increases the pace of the game and forces the players to make decisions faster, since confronting a Charger too late is dangerous._
- Each enemy type and weapon type is designed to be good against some, but bad against others, providing balanced gameplay and equally viable weapons the player would want to switch between throughout the game.
    - **Blasters** are good against **Schemers**, since they have decent firing rate and damage per shot, killing the Schemer before it shrinks so small that it becomes hard to shoot.
    - **Lasers** are good against **Chargers**, since they make Chargers lose all speed and become completely still with their fast firing rate.
    - **Splitters** are good against **Drifters**, since they catch sideways movement well with their angled bullet trajectories.
    - **Cannons** are good against **Mobs**, since they shoot straight throw all enemies and destroy the low-HP Mobs easily.
- A rhythmic and music-context-based enemy-spawning system:
    - **Rhythmic**: enemies drop onto the top of the screen in sync with the beat of the bgm.
    - **Music-context-based**: fewer enemies are spawned in the beginning of the song, following the feel of the music. As the beat becomes more intense, more enemies appear, and different combinations of enemies spawn according to the section of the song.
    - **Spawn configurations**: There are a total of 18 unique predefined spawn configurations, each activating at a certain segment in the song, some more than once.
- Multiple types of collisions (& particle effects):
    - **Enemy-to-Player**: The enemy explodes in an animated explosion. The player spawns a particle effect that has extra particles when it is the player's last heart.
    - **Bullet-to-enemy**: The bullet triggers an animated explosion. The enemy spawns a particle effect when its HP reaches 0 and it is destroyed.
- A total of 8 different sound effects and 2 songs:
    - **Menu Music**: plays in the main menu, instructions screen, and volume adjustment screen without resetting.
    - **Game Music**: plays during actual gameplay, synchronized with the enemy spawn system.
    - **2 Menu Interaction SFX**: 1 for clicking into, 1 for clicking back.
    - **3 Power-Up SFX**: 1 for weapon change, 1 for extra heart, 1 for extra special.
    - **3 Collision SFX**: 1 for hitting an enemy, 1 for killing an enemy, 1 for the player being hit.
- A total of 5 states:
    - **Load State**: preloads every asset needed for the game, and shows the loading progress (%) in the top left of the screen. Goes straight to the Menu State when everything is loaded.
    - **Menu State**: the main menu shows 3 buttons that lead the Play State, Instructions State, and Volume State.
    - **Play State**: where the main gameplay occurs. Can either lead back to the Menu State or restart itself via the Game Over Screen or Victory Screen ("back to menu" & "play again").
    - **Instructions State**: a 5-page instruction "book" that teaches the basics of the game. Can flip back and forth, and loops around. Includes animated sprites.
    - **Volume State**: allows altering the volumes of the bgm and sfx individually via sliders and shown percentages.

### Game Resources
**Code & Game Design** by Brian Ho

**Art & Animation** by Brian Ho

**Gameplay Music** — Moonlight Sonata by cYsmix

**Menu Music** — Cloudpost by cYsmix feat. Satella

**Sound Effects** by OmegaPixelArt

**Explosion Animations** by Luis Zuno