<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Exception;
use App\Models\Workspace;

class WorkspaceController extends Controller
{
    // Get Workspace List from database

    public function getSpaceList()
    {
        try
        {
            $workspaces = Workspace::all(); // from \app\Models\Workspace.php
            return response()->json($workspaces);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }
}
