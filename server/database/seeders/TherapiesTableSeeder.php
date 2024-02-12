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
                'title' => 'Psicoterapia Del Adulto',
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
                'title' => 'Psicoterapia Del Adolescente',
                'description' => 'En ésta etapa crucial de la vida la psicoterapia proporciona un espacio confidencial que favorece la expresión libre, sin juicios de valor, promoviendo un trabajo psíquico de autoconocimiento y bienestar. 
                Nuestros profesionales acompañan en los desafíos típicos de éste momento particular de vida atentos a las necesidades y dificultades, acompañando a desarrollar habilidades sociales y emocionales, estrategias para la toma de decisiones asertivas, con el objetivo de generar un crecimiento personal significativo.',
                'opportunity1' => 'Explorar tus emociones en un espacio donde puedes compartir tus experiencias de manera abierta, fomentando la autoexpresión y la reflexión.',
                'opportunity2' => 'Desarrollar estrategias prácticas para adquirir herramientas y habilidades que te ayudarán a enfrentar los desafíos cotidianos.',
                'opportunity3' => 'Fomentar la autenticidad, descubriendo cómo honrar tu verdad y vivir de acuerdo con tus valores.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Psicoterapia De Parejas',
                'description' => 'Ofrecemos con el acompañamiento de cada profesional un lugar seguro para mejorar la intimidad y la conexión emocional donde los participantes puedan ser escuchados empáticamente promoviendo una base sólida para la comunicación.
                Trabajamos juntos para identificar patrones de comportamiento que puedan estar afectando la relación para enfocarnos en desarrollar estrategias abordando los conflictos de manera constructiva.
                Es un espacio de crecimiento compartido que promueve la comunicación efectiva y afectiva.',
                'opportunity1' => 'Explorar tus emociones en un espacio donde puedes compartir tus experiencias de manera abierta, fomentando la autoexpresión y la reflexión.',
                'opportunity2' => 'Desarrollar estrategias prácticas para adquirir herramientas y habilidades que te ayudarán a enfrentar los desafíos cotidianos.',
                'opportunity3' => 'Fomentar la autenticidad, descubriendo cómo honrar tu verdad y vivir de acuerdo con tus valores.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Servicio Para Empresas',
                'description' => 'En las grandes empresas de hoy en día, la inversión en el bienestar de los empleados no solo es una buena práctica, sino una estrategia empresarial inteligente. 
                Un equipo emocionalmente equilibrado es un equipo eficiente, el ambiente de trabajo se transforma en un espacio positivo donde surge creatividad y colaboración. 
                En un mundo de desafíos constantes, nos dedicamos a la búsqueda de líderes sólidos, selección de personal idóneo para cada puesto, identificación y potenciación de talentos, aplicación de estrategias efectivas de resolución de conflictos que promoverán ambientes de trabajo agradables y productivos.',
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
