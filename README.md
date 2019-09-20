# Gutenberg!
## Manuale pratico per non farsi travolgere
Creare blocchi di gutenberg non è solo per Javascript Ninja, possiamo utilizzare le nostre conoscenze di WordPress per creare blocchi personalizzati in pochissimo tempo!

Potete trovare la nostra presentazione [qui](https://treviso-meetup-gutenberg.netlify.com) .

## Come usare il repository
Qui è contenuto tutto il codice che abbiamo mostrato durante la presentazione, e molto di più!

Abbiamo incluso una installazione di WordPress completa, in modo tale che possiate testare a vostro piacimento tutte le configurazioni che abbiamo creato

### Requisiti
* Docker! We love Docker.
* Docker Compose! We also love Docker Compose.
* Node per lo sviluppo del plugin dei servizi

### Installazione
L'ambiente di WordPress è stato creato tramite un nostro sistema di managment di container, [Kayak](https://github.com/nodopiano/kayak).

Una volta scaricato il repository, eseguite il comando:
```sh
./kayak install
```

Kayak installerà per voi WordPress e lo renderà disponibile all'indirizzo [trevisomeetup.localhost](http://trevisomeetup.localhost/).

Fatto!

### Giochiamo con WordPress
Potete accere al [backend](http://trevisomeetup.localhost/wp-admin) con nome utente `nodopiano` e password `nodopiano`.

Da qui potete aggiungere plugin, cambiare i temi e modificare tutto ciò che volete.

Vi serve guardare la configurazione del DB? Nessun problema, un container di PHPMyAdmin è già pronto per voi! Collegatevi all'indirizzo [localhost:8181](http://localhost:8181/) e collegatevi a MySQL con nome utente `root` e password `nodopiano`.

Kayak prepara le cartelle `themes`, `plugins` e `uploads` all'interno di `wordpress-installation`.

Se dovessero esserci problemi con l'edit di file e cartelle all'interno del progetto, eseguite semplicemente:
```sh
sudo chown -R $USER:$USER wordpress-installation
```

#### Il plugin dei servizi
Il plugin dei servizi scritto in React si trova all'interno di `wordpress-installation/plugins/np-servizi`.

Cominciate a sviluppare entrando nella cartella e digitando:
```sh
# Installiamo le dipendenze
npm install
# Lanciamo la compilazione in tempo reale
npm develop
```

Fate riferimento al [repository originale di create-guten-block](https://github.com/ahmadawais/create-guten-block) per cominciare a sviluppare i vostri blocchi preferiti.

#### Il tema
Il tema che abbiamo usato si trova in `wordpress-installation/themes/treviso-meetup-2019`.

È un fork semplicissimo di TwentyNineteen.

#### Gutenberg + Advanced Custom Fields (ACF)
All'interno della cartella `/inc` potete trovare il file `acf-gutenberg.php` che contiene le funzioni necessarie a registrare il blocco di Gutenberg attraverso la funzione `acf_register_block_type` messa a disposizione da ACF dalla versione 5.8, questo file è incluso nel `functions.php` del tema in uso.

All'interno della cartella `/blocks` il file `services.php` descrive la struttura del blocco di Gutenberg che intendiamo includere.

All'interno della cartella `/acf-json` è presente un file `JSON` che raccoglie i field di ACF impiegati nel progetto.
