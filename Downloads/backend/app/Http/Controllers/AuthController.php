<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginStoreRequest;
use App\Interfaces\AuthRepositoryInterface;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    private AuthRepositoryInterface $authRepository;

    public function __construct(AuthRepositoryInterface $authRepository)
    {
        $this->authRepository = $authRepository;
    }

    /**
    * Login user dan return token.
    */
    public function login(LoginStoreRequest $request)
    {
        $request = $request->validated();
        return $this->authRepository->login($request);
    }

    /**
    * Logout user yang sedang login.
    */
    public function logout()
    {
        return  $this->authRepository->logout();
    }

    /**
    * Ambil data user yang sedang login.
    */
    public function me()
    {
        return $this->authRepository->me();
    }
}
