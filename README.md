
```
As a Film Enthusiast
So I can find a good movie to watch
I want to Search through a list of movies
```

```
As a Film Enthusiast
So I can get a sense for what to watch
I want to See the movie title, poster and an overview
```

```
As a Film Enthusiast
So I can remember what I've been browsing
I want to pick my favourite films from a list
```

```
As a Film Enthusiast
So I know which films a re good and which are bad
I want to rank movies in order
```

```
As a Film Enthusiast who can only count up to 5
So that I can remember my favourite films ever
I want to persist only my top 5 to a database
```

```
As a Film Enthusiast
So I can change my mind
I want to be able to re-order my ranking list
```

```
As a Film Enthusiast who can only count up to 5
So I can understand what is a good film or not,
I want to change a pre-determined rating to be out of 5
```

```
As a Film Enthusiast
So I can add new films to my Top 5
Dynamically update my rankings
```

[This Mystical API](https://www.themoviedb.org/documentation/api) will help you with finding all the info you could ever need about movies. It's not actually mystical.. thanks to themoviedb.org for building it! The config for the API is [here](./front-end/src/config.json)


The schema that you will need to follow for persisting the data is:

```
{
    "_id": 396371,
    "overview": "Naval Aviator, Pete 'Maverick' Mitchell (Tom Cruise), takes a whirlwind adventure with partner Nick 'Goose' Bradshaw. Sexy, misunderstood, full-throttle machismo. Tremendous.",
    "posterPath": "/h9hUP5ZJGsjL2wbERrGlj4dMjZq.jpg",
    "releaseDate": "2017-12-21",
    "title": "Top Gun",
    "ownScore": 5.0
    "communityScore": 9.9
}
```




