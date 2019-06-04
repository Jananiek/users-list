<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\User;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    /**
     * Test for show single user
     */
    public function test_can_show_user()
    {
        $user = factory(User::class)->create();
        $this->get(route('user.show', $user->id))
            ->assertStatus(200);
        $this->assertTrue(true);
    }

    /**
     * Test for show list of users
     */
    public function test_can_list_users() {
        $users = factory(User::class, 2)->create()->map(function ($user) {
            return $user->only(['id', 'fname', 'lname']);
        });
        $this->get(route('user.index'))
            ->assertStatus(200)
            ->assertJson($users->toArray())
            ->assertJsonStructure([
                '*' => ['id', 'fname', 'lname'],
            ]);
    }
}
