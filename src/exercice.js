// exo 1 (object and array)
 let playlist = ["song 1","song 2", "song 3", "song 4", "song 5"]
 console.log ( " the third song is :", playlist[2])
 playlist.push ("song 6")
 const song ={ 
    "title": "nada ",
    "author": "yuvi",
    "publicationyear" : 2021,
    "chapter" : ["chap 1","chap 2","chap 3"]
  }
  song.summery = () => console.log (`title: ${song.title} author : ${song.author}`)
  song.summery()
 
function hello (name) {
    console.log ("my name is :",name)
    return name 
} 
 