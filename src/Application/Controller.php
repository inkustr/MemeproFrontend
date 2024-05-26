<?php

namespace App\Application;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class Controller extends AbstractController
{
    #[Route(
        path: '/',
        name: 'base',
        options: ['expose' => true],
        methods: [Request::METHOD_GET]
    )]
    public function baseGetAction() {
        return $this->redirect('memepro/logged_out');
    }

    #[Route(
        path: '/memepro/logged_out',
        name: 'logged_out',
        options: ['expose' => true],
        methods: [Request::METHOD_GET]
    )]
    public function loggedOutGetAction() {
        return $this->render('Memepro/LoggedOut.html.twig');
    }

    #[Route(
        path: '/memepro/gold',
        name: 'gold',
        options: ['expose' => true],
        methods: [Request::METHOD_GET]
    )]
    public function goldGetAction() {
        return $this->render('Memepro/Gold.html.twig');
    }

    #[Route(
        path: '/memepro/silver',
        name: 'silver',
        options: ['expose' => true],
        methods: [Request::METHOD_GET]
    )]
    public function silverGetAction() {
        return $this->render('Memepro/Silver.html.twig');
    }
}