<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TeamTableSeeder extends Seeder
{
    public function run(): void
    {
        $team = [
            [
                'name' => 'María Susana Giménez',
                'title' => 'Licenciada en Psicología',
                'profile' => 'El primer objetivo de nuestras sesiones será que seas más consciente de cómo interpretas los acontecimientos de tu vida y cómo condicionan tus reacciones. Mientras tanto, descubriremos tus recursos internos para potenciarlos y, al mismo tiempo, combinarlos con nuevas habilidades que te ayudarán a alcanzar los objetivos que te propongas.',
                'area1' => 'Adicciones conductuales (relaciones, compras, juegos de azar...)',
                'area2' => 'Adicción a las drogas',
                'area3' => 'Trastornos con la alimentación',
                'image' => 'image',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Juan José Rodriguez',
                'title' => 'Licenciado en Psicología',
                'profile' => 'El primer objetivo de nuestras sesiones será que seas más consciente de cómo interpretas los acontecimientos de tu vida y cómo condicionan tus reacciones. Mientras tanto, descubriremos tus recursos internos para potenciarlos y, al mismo tiempo, combinarlos con nuevas habilidades que te ayudarán a alcanzar los objetivos que te propongas.',
                'area1' => 'Adicciones conductuales (relaciones, compras, juegos de azar...)',
                'area2' => 'Adicción a las drogas',
                'area3' => 'Trastornos con la alimentación',
                'image' => 'image',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Ana Martina González ',
                'title' => 'Licenciada en Psicología',
                'profile' => 'El primer objetivo de nuestras sesiones será que seas más consciente de cómo interpretas los acontecimientos de tu vida y cómo condicionan tus reacciones. Mientras tanto, descubriremos tus recursos internos para potenciarlos y, al mismo tiempo, combinarlos con nuevas habilidades que te ayudarán a alcanzar los objetivos que te propongas.',
                'area1' => 'Adicciones conductuales (relaciones, compras, juegos de azar...)',
                'area2' => 'Adicción a las drogas',
                'area3' => 'Trastornos con la alimentación',
                'image' => 'image',
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ];

        DB::table('team')->insert($team);
    }
}
