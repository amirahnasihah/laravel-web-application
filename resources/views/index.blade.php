@extends('welcome')

@section('main-content')
<div>
    <div class="float-start">
        <h4 class="pb-3">My Tasks</h4>
    </div>
    <div class="float-end">
        <a href="{{ route('task.create')}}" class="btn btn-info">
            Create
        </a>
    </div>
    <div class="clearfix"></div>
</div>

@foreach ($tasks as $task)
    <div class="card">
        <div class="card-header">
            <!--title task-->
            {{ $task->title }}
            <span class="badge rounded-pill text-bg-warning">time</span>
        </div>
        <div class="card-body">
            <div class="card-text">
                <div class="float-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis provident facilis ad iusto! Atque distinctio delectus rerum mollitia cum aliquam possimus labore quibusdam assumenda provident. Ea animi alias nobis omnis!
                <br>
                <span class="badge rounded-pill text-bg-info">Todo</span>
                <small>Last Updated - </small>
                </div>
                <div class="float-end">
                    <a href="{{ route('task.edit', 1)}}" class="btn btn-success">
                        Edit
                    </a>
                    <a href="{{ route('task.edit', 1)}}" class="btn btn-danger">
                        Delete
                    </a>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
@endforeach


@endsection