<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Video;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class VideoTest extends TestCase
{
    /**
     * Test for showing video list
     */
    public function test_can_show_video_list()
    {
        $videos = factory(Video::class, 2)->create()->map(function ($video) {
            return $video->only(['user_id', 'title']);
        });
        $this->get(route('video.index'))
            ->assertStatus(200)
            ->assertJson($videos->toArray())
            ->assertJsonStructure([
                '*' => ['user_id', 'title']
            ]);
    }

    /**
     * test for showing video count
     */
    public function test_can_show_video_count()
    {

        $videos = factory(Video::class, 2)->create()->map(function ($video) {
            return $video->only(['user_id', 'title']);
        });
        $this->get(route('video.count'))
            ->assertStatus(200)
            ->assertJsonStructure([
                '*' => ['user_id', 'total']
            ]);
    }
}
