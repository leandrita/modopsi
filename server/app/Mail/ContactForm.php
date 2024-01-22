<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactForm extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    public function __construct(array $data)
    {
        $this->data = $data;
    }

    public function build()
    {
        return $this->from($this->data['email'])
            ->subject('Nuevo mensaje de contacto')
            ->view('emails.blank')
            ->with('content', 'Correo electrónico enviado desde Laravel API: ' . json_encode($this->data));
    }
}
