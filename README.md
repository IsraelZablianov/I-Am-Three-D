# I Am Three D

Create a beautiful 3D image using image and depth map.

## Get Ready

Before starting don't forget to install.

```bash
npm i
```

## Usage

Under the assets folder you will find 3 images.

```txt
    image.jpg
    image-map.jpg
    image-overlay.png

```

All you need to do is replace thoese images with different one.
Off course the naming should remain the same (with the extensions).

if you would like to change the name or the extensions.
you should replace the naming reference in:

For the overlay go the the root folder and search under index.html file:


```html
 <img src="src/assets/image-overlay.png" alt="overlay">
```
replace `image-overlay.png` with the overlay image name.


For the image and the depth map, go to `.src/scripts/index.js`

```js
.......

let img = PIXI.Sprite.from("src/assets/image.jpg");

........

let depthMap = PIXI.Sprite.from("src/assets/image-map.jpg");
```
replace `image.jpg` or/and `image-map.jpg` with the your new images names.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)