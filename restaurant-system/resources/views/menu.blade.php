@extends('layouts.main')

@section('content')

<style>
</style>
    <h1 class="text-center">Menu</h1>


    <div class="row">
 
          @foreach ($items as $item)
         
          <div class="col-3 p-5 text-center">
            <h2>{{ $item['type'] }}</h2>
          </div>
          @endforeach
    </div>

    
@endsection