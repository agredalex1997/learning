<?php

$firstName = "Alex";
$lastName = "Ágreda";
$fullName = $firstName . " " . $lastName;
$greeting = "Hello, $fullName!";

echo $greeting;

class Vehicle {
    public function drive() {
        echo "driving...\n";
    }
}

class RacingCar extends Vehicle {
    public function drive() {
        parent::drive();

        echo "driving even faster...\n";
    }
}

$datsun = new Vehicle();
$lambo = new RacingCar();

$datsun->drive();
$lambo->drive();