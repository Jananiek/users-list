<?php

use Illuminate\Database\Seeder;

class VideoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        $users = User::all();
        foreach ($users as $user) {
            $videos = [];
            $count = $faker->numberBetween($min = 0, $max = 5);
            for ($i = 0; $i < $count; $i++) {
                $video = Video::create([
                    'user_id' => $user->id,
                    'title' => $faker->sentence($nbWords = 5, $variableNbWords = true)
                ]);
                $videos[] = $video;
            }
            $user->videos()->saveMany($videos);
        }
    }
}
