# intermusic
Website with some music lyrics of songs from around the world. Made using Vue with Typescript.

# Usage

Run the server first and then the client or just do `npm run dev`.
  - **Client:** Stores a list of ids, which are the Genius IDs of each song I have added.
  - **Server:** When the api is called, it will use Genius' api to fetch the song's information and using that information, it'll use it's url to scrape the lyrics and send it to the client.
