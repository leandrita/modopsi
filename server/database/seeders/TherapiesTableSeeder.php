<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class TherapiesTableSeeder extends Seeder
{
    public function run(): void
    {
        $therapies = [
            [
                'title' => 'Terapia Individual Adulto',
                'description' => 'Nuestras sesiones de terapia psicológica individual para adultos, son un espacio seguro y confidencial donde puedes explorar y fortalecer tu bienestar emocional. 
                En cada sesión, te invitamos a sumergirte en un viaje de autoconocimiento, crecimiento personal y desarrollo de habilidades para afrontar los desafíos de la vida.
                Nuestros psicólogos altamente capacitados ofrecen un enfoque compasivo y personalizado, adaptándose a tus necesidades y metas específicas.   
                Trabajaremos juntos para comprender tus pensamientos, emociones y patrones de comportamiento, identificando áreas de fortaleza y oportunidades para el cambio positivo.',
                'opportunity1' => 'Explorar tus emociones en un espacio donde puedes compartir tus experiencias de manera abierta, fomentando la autoexpresión y la reflexión.',
                'opportunity2' => 'Desarrollar estrategias prácticas para adquirir herramientas y habilidades que te ayudarán a enfrentar los desafíos cotidianos.',
                'opportunity3' => 'Fomentar la autenticidad, descubriendo cómo honrar tu verdad y vivir de acuerdo con tus valores.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Terapia Individual Adolescente',
                'description' => 'Nuestras sesiones de terapia psicológica individual para adultos, son un espacio seguro y confidencial donde puedes explorar y fortalecer tu bienestar emocional. 
                En cada sesión, te invitamos a sumergirte en un viaje de autoconocimiento, crecimiento personal y desarrollo de habilidades para afrontar los desafíos de la vida.
                Nuestros psicólogos altamente capacitados ofrecen un enfoque compasivo y personalizado, adaptándose a tus necesidades y metas específicas.   
                Trabajaremos juntos para comprender tus pensamientos, emociones y patrones de comportamiento, identificando áreas de fortaleza y oportunidades para el cambio positivo.',
                'opportunity1' => 'Explorar tus emociones en un espacio donde puedes compartir tus experiencias de manera abierta, fomentando la autoexpresión y la reflexión.',
                'opportunity2' => 'Desarrollar estrategias prácticas para adquirir herramientas y habilidades que te ayudarán a enfrentar los desafíos cotidianos.',
                'opportunity3' => 'Fomentar la autenticidad, descubriendo cómo honrar tu verdad y vivir de acuerdo con tus valores.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Terapia Individual Niño',
                'description' => 'Nuestras sesiones de terapia psicológica individual para adultos, son un espacio seguro y confidencial donde puedes explorar y fortalecer tu bienestar emocional. 
                En cada sesión, te invitamos a sumergirte en un viaje de autoconocimiento, crecimiento personal y desarrollo de habilidades para afrontar los desafíos de la vida.
                Nuestros psicólogos altamente capacitados ofrecen un enfoque compasivo y personalizado, adaptándose a tus necesidades y metas específicas.   
                Trabajaremos juntos para comprender tus pensamientos, emociones y patrones de comportamiento, identificando áreas de fortaleza y oportunidades para el cambio positivo.',
                'opportunity1' => 'Explorar tus emociones en un espacio donde puedes compartir tus experiencias de manera abierta, fomentando la autoexpresión y la reflexión.',
                'opportunity2' => 'Desarrollar estrategias prácticas para adquirir herramientas y habilidades que te ayudarán a enfrentar los desafíos cotidianos.',
                'opportunity3' => 'Fomentar la autenticidad, descubriendo cómo honrar tu verdad y vivir de acuerdo con tus valores.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Terapia De Pareja',
                'description' => 'Nuestras sesiones de terapia psicológica individual para adultos, son un espacio seguro y confidencial donde puedes explorar y fortalecer tu bienestar emocional. 
                En cada sesión, te invitamos a sumergirte en un viaje de autoconocimiento, crecimiento personal y desarrollo de habilidades para afrontar los desafíos de la vida.
                Nuestros psicólogos altamente capacitados ofrecen un enfoque compasivo y personalizado, adaptándose a tus necesidades y metas específicas.   
                Trabajaremos juntos para comprender tus pensamientos, emociones y patrones de comportamiento, identificando áreas de fortaleza y oportunidades para el cambio positivo.',
                'opportunity1' => 'Explorar tus emociones en un espacio donde puedes compartir tus experiencias de manera abierta, fomentando la autoexpresión y la reflexión.',
                'opportunity2' => 'Desarrollar estrategias prácticas para adquirir herramientas y habilidades que te ayudarán a enfrentar los desafíos cotidianos.',
                'opportunity3' => 'Fomentar la autenticidad, descubriendo cómo honrar tu verdad y vivir de acuerdo con tus valores.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Servicio Para Empresas',
                'description' => 'Nuestras sesiones de terapia psicológica individual para adultos, son un espacio seguro y confidencial donde puedes explorar y fortalecer tu bienestar emocional. 
                En cada sesión, te invitamos a sumergirte en un viaje de autoconocimiento, crecimiento personal y desarrollo de habilidades para afrontar los desafíos de la vida.
                Nuestros psicólogos altamente capacitados ofrecen un enfoque compasivo y personalizado, adaptándose a tus necesidades y metas específicas.   
                Trabajaremos juntos para comprender tus pensamientos, emociones y patrones de comportamiento, identificando áreas de fortaleza y oportunidades para el cambio positivo.',
                'opportunity1' => 'Explorar tus emociones en un espacio donde puedes compartir tus experiencias de manera abierta, fomentando la autoexpresión y la reflexión.',
                'opportunity2' => 'Desarrollar estrategias prácticas para adquirir herramientas y habilidades que te ayudarán a enfrentar los desafíos cotidianos.',
                'opportunity3' => 'Fomentar la autenticidad, descubriendo cómo honrar tu verdad y vivir de acuerdo con tus valores.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('therapies')->insert($therapies);
    }
}
