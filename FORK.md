# Fork Documentation

Documentation about forked package.

## Features

1. It is not necessary to use the default connection, you can use another (tested same connection for users and ticketit).
2. Config file to change installation and working parameters easily.
3. Custom closed tickets email.
4. Spanish translations improved.
5. Working queued emails and customization with tags (Laravel Horizon) and custom queue connection.

## Changelog

Available versions and next improvements

### v0.4.5.3 - 2020-06-20

- [x] Array helpers to `Illuminate\Support\Arr::*`
- [x] Support for Laravel 5.x and 6.x
- [x] Added `google-charts` library locally.

### v0.4.5.2 - 2019-10-10

- [x] Delete ticket comments on destroy.

### v0.4.5.1 - 2018-12-21

- [x] Posibility to use a different connection that _Laravel default_.
- [x] Code adapted for use a config file _ticketit.php_ to customize parameters.
- [x] Some email templates modified.
- [x] Custom _closed_ tickets email.
- [x] Spanish translations modified.
- [x] Queued mails fixed.
- [x] Customization of queued mails and tags (Laravel Horizon).

## Installation

Apply before step 4.

- Create **App\TicketitModel** with your desired Ticketit Model (_/app/TicketitModel.php_).

```php

<?php

namespace App;

use Illuminate\Database\Eloquent\Model as BaseModel;
//use My\CustomModel as BaseModel;

class TicketitModel extends BaseModel
{
    // Custom model for (thekordy/ticketit)
}

```

- Publish ticketit.php config file on Laravel for customizations (some of them required before installation):

```bash

	# Migrations on ticketit
	$ artisan vendor:publish --provider="Kordy\Ticketit\TicketitServiceProvider" --tag=config --force

```

- Add your custom database connections at .env for example:

```bash
	# Migrations on ticketit
	# I have only checked using same connection for both.
	# Maybe it doesn't work with different connections because of raw sql joins in some parts of code
	TICKETIT_CONNECTION=default
	TICKETIT_DB=users
	TICKETIT_USER_CONNECTION=default
	TICKETIT_USER_DB=users

```

## Author

- _Pablo Bernardo_ - [pablobernardo](https://github.com/pablobernardo)
