# spaceX

The project is to fetch data trough server side rendring and applying filter on the same.
Below is the description of the approach that is used:

1) Used nextjs for serverside rendering.
2) By default the whole data is fetched from api.
3) Then, on  click of each filter button the data is changed according to applied filter.The approach is used that the url is saved in state and on click of any button the state of the url is updated and then in componentdidmount the data is rendered according to the updated url.  
4) The website is responsive.
5) Lighthouse score is 84.<img src="https://github.com/kanika-rajput/spaceX/blob/master/Capture.PNG" />
6) Website is hosted in vercel. Link: https://space-x-kanika.vercel.app/.
7) Testing is done with jest and enzymne of data component.
