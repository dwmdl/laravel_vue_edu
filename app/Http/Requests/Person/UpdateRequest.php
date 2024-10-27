<?php

namespace App\Http\Requests\Person;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'age' => 'required|integer',
            'job' => 'required|string',
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
