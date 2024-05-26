## Installation:

1. Clone the repository: `git clone https://git.tu-berlin.de/nsisyphus/sksy24-hausaufgabe-1.git`
2. Change into the directory: `cd sksy24-hausaufgabe-1`
3. Install composer: `brew install composer`
4. Install composer dependencies: `composer install`
5. Install dependencies: `npm install`
6. Build frontend: `encore dev`
7. Uncomment `extension=pdo_mysql` in `php.ini` file
   - To find the `php.ini` file, run `php --ini`
8. Run Symfony server: `symfony server:start`
9. Open the browser and go to `http://localhost:8000`
10. Enjoy the application!

To stop the server: `symfony server:stop`

