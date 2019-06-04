<?php

use Illuminate\Database\Seeder;
use App\User;
class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker=\Faker\Factory::create();
        for($i=0;$i<200;$i++){
            User::create([
                'fname'=>$faker->firstName,
                'lname'=>$faker->lastName
            ]);
        }
    }
}
