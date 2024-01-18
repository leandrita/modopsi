<?php

namespace Tests\Feature\Api;

use App\Models\Therapy;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TherapyTest extends TestCase
{

    use RefreshDatabase;

    public function test_guest_can_see_all_therapies(): void
    {
        $this->withExceptionHandling();

        Therapy::factory()->create();

        $response = $this->getJson('/api/therapies');

        $response->assertJsonStructure([
            '*' => [
                'id',
                'title',
                'description',
                'opportunity1',
                'opportunity2',
                'opportunity3',
            ]
        ]);

        $response->assertJsonCount(1);
    }

    public function test_guest_can_see_therapy_details(): void
    {
        $this->withExceptionHandling();

        $therapy = Therapy::factory()->create();

        $response = $this->getJson("api/therapy/{$therapy->id}");

        $response->assertStatus(200)
            ->assertJson([
                'terapia' => [
                    'id' => $therapy->id,
                    'title' => $therapy->title,
                    'description' => $therapy->description,
                    'opportunity1' => $therapy->opportunity1,
                    'opportunity2' => $therapy->opportunity2,
                    'opportunity3' => $therapy->opportunity3,
                ]
            ]);
    }

    public function test_guest_can_not_see_a_nonexistent_therapy(): void
    {
        $this->withExceptionHandling();

        $therapy = Therapy::factory()->create();

        $response = $this->getJson('api/therapy/999');

        $response->assertStatus(404);
    }
}
