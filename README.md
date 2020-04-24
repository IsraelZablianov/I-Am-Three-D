# I Am Three D

Create a beautiful 3D image using image and depth map.

## General

This project is basically intended for non devs. 
This project is depend upon Pixi.js and uses Pixi.js cdn.
The benifit of using the cdn is that you don't need to install anything and can send the file `index.html` as is.
The only file that you need to send/deal with is `index.html`.

## Usage

Under `index.html` search for `sources`.

you will se a structure of: 
```js
    var sources = {
        img: "https://...",
        depthMap: "https:...",
        overlay: "https://...",
    };

```

All you have to do is to provide 3 valid url's and put them here (don't forget to save).
That is all! you are now ready, double click from the folder manager on the index.html file.
Enjoy!

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)