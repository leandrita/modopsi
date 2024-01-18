<?php

namespace Tests\Feature\Api;

use App\Models\Professional;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProfessionalTest extends TestCase
{
    use RefreshDatabase;

    public function test_guest_can_see_all_professionals(): void
    {
        $this->withExceptionHandling();

        Professional::factory()->create();

        $response = $this->getJson('/api/professionals');

        $response->assertJsonStructure([
            '*' => [
                'id',
                'name',
                'title',
                'profile',
                'area1',
                'area2',
                'area3',
                'image',
            ]
        ]);

        $response->assertJsonCount(1);
    }

    public function test_guest_can_see_professional_details(): void
    {
        $this->withExceptionHandling();

        $professional = Professional::factory()->create();

        $response = $this->getJson("api/professional/{$professional->id}");

        $response->assertStatus(200)
            ->assertJson([
                'profesional' => [
                    'id' => $professional->id,
                    'name' => $professional->name,
                    'title' => $professional->title,
                    'profile' => $professional->profile,
                    'area1' => $professional->area1,
                    'area2' => $professional->area2,
                    'area3' => $professional->area3,
                    'image' => $professional->image,
                ]
            ]);
    }

    public function test_guest_can_not_see_a_nonexistent_professional(): void
    {
        $this->withExceptionHandling();

        $professional = Professional::factory()->create();

        $response = $this->getJson('api/professional/999');

        $response->assertStatus(404);
    }
}
