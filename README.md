In the board game Talisman, when two players enter combat the outcome is decided by a combat score, equal to the players power plus any modifiers plus the roll of a standard 1-6 dice. The player with the highest combat score wins and the opposing player loses a life. In the case of a tie combat ends with neither player losing a life.

For example:

Player 1: 5 Power, 0 Modifier
Player 2: 3 Power, 2 Modifier

Player 1 rolls a 4, Player 2 rolls a 2.

(5 + 0 + 4) -> (3 + 2 + 2)
Player 1 wins (9 > 7)
Your task is to write a method that calculates the required roll for the player to win.

The player and enemy stats are given as an array in the format:

[power, modifier]
For example for the examples used above the stats would be given as:

getRequired([5, 0], [3, 2]) // returns 'Random'
If the player has at least 6 more power (including modifiers) than the enemy they automatically wins the fight, as the enemy's combat score couldn't possibly exceed the player's. In this instance the method should return "Auto-win".

For example:

getRequired([9, 0], [2, 1]) // returns 'Auto-win' as the enemy can't possibly win
If the enemy has at least 6 more power (including modifiers) than the player they automatically wins the fight, as the player's combat score couldn't possibly exceed the enemy's. In this instance the method should return "Auto-lose".

For example:

getRequired([2, 1], [9, 0]) // returns 'Auto-lose' as the player can't possibly win
If the player and enemy have the same power (including modifiers) the outcome is purely down to the dice roll, and hence would be considered completely random. In this instance the method should return "Random".

For example (as above):

getRequired([5, 0], [3, 2]) // returns 'Random' as it is purely down to the dice roll
If the player has greater power than the enemy (including modifiers) the player could guarantee a win by rolling a high enough number on the dice. In this instance the method should return a range equal to the numbers which would guarantee victory for the player.

getRequired([6, 0], [2, 2]) // returns '(5..6)' as rolling a 5 or 6 would mean the enemy could not win
getRequired([7, 1], [2, 2]) // returns '(3..6)' as rolling anything 3 through 6 would mean the enemy could not win
If the player has less power than the enemy (including modifiers) the player can only win if the enemy rolls a low enough number, providing they then roll a high enough number. In this instance the method should return a range equal to the numbers which would allow the player a chance to win.

getRequired([4, 0], [6, 0]) // returns '(1..3)' as this would be the only outcome for which the player could still win
getRequired([1, 1], [6, 0]) // returns '(1..1)' as this would be the only outcome for which the player could still win
If the better case scenario for the player is to hope for a tie, then return "Pray for a tie!".

getRequired([7, 2], [6, 8]) // returns "Pray for a tie!"

# how to set up a CI pipeline at github? It's a JavaScript project and we plan to use Typescript in the future.

## 🗒️ Answer

To set up a Continuous Integration (CI) pipeline on GitHub for a JavaScript project, especially one planning to incorporate TypeScript, you can use GitHub Actions [[1](https://medium.com/@templum.dev/how-to-get-started-with-your-first-javascript-typescript-github-action-b60630a6a7cf)].

Here are the basic steps:

1.  Create a GitHub repository for your project [[2](https://dev.to/vishnusatheesh/how-to-set-up-a-cicd-pipeline-with-github-actions-for-automated-deployments-j39)].
2.  In your repository, define a workflow file (usually in `.github/workflows/`) in YAML format [[2](https://dev.to/vishnusatheesh/how-to-set-up-a-cicd-pipeline-with-github-actions-for-automated-deployments-j39)].
3.  This workflow will specify jobs and steps to run when certain events occur (e.g., a push to the repository) [[2](https://dev.to/vishnusatheesh/how-to-set-up-a-cicd-pipeline-with-github-actions-for-automated-deployments-j39)].
4.  Common steps in the CI pipeline include:
    * Checking out your code [[4](https://michaelzanggl.com/articles/github-actions-ci-setup/)].
    * Setting up Node.js [[4](https://michaelzanggl.com/articles/github-actions-ci-setup/)].
    * Installing project dependencies [[4](https://michaelzanggl.com/articles/github-actions-ci-setup/)].
    * Running linters and formatters.
    * Building the project. If you use or plan to use TypeScript, this step will involve compiling your `.ts` files using the `tsc` command [[6](https://stackoverflow.com/questions/14486134/typescript-continuous-integration/), [5](https://medium.com/@jeanycyang/js-in-pipeline-6-ci-cd-pipeline-1-99e0e991dd14)].
    * Running tests [[4](https://michaelzanggl.com/articles/github-actions-ci-setup/)].

This setup provides a foundation for automated checks and builds every time changes are pushed to your repository.

## 🌐 Sources

1.  medium.com - How to get started with your first JavaScript/TypeScript ... [[1](https://medium.com/@templum.dev/how-to-get-started-with-your-first-javascript-typescript-github-action-b60630a6a7cf)]
2.  dev.to - How to Set Up a CI/CD Pipeline with GitHub Actions for ... [[2](https://dev.to/vishnusatheesh/how-to-set-up-a-cicd-pipeline-with-github-actions-for-automated-deployments-j39)]
3.  github.com - Create your first pipeline for a typescript project [[3](https://github.com/rondinif/pipeline-typescript)]
4.  michaelzanggl.com - GitHub Actions: Setting up CI for a JS/TS/Node project [[4](https://michaelzanggl.com/articles/github-actions-ci-setup/)]
5.  medium.com - JS in Pipeline (6): CI/CD pipeline (1) | by Jean YC Yang [[5](https://medium.com/@jeanycyang/js-in-pipeline-6-ci-cd-pipeline-1-99e0e991dd14)]
6.  stackoverflow.com - TypeScript Continuous Integration - javascript [[6](https://stackoverflow.com/questions/14486134/typescript-continuous-integration/)]