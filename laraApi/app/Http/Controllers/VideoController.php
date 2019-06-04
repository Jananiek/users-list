<?php

namespace App\Http\Controllers;

use App\Video;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    /**
     * Get all videos
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $videos = Video::all();
        return response()->json($videos, 200);
    }

    /**
     * Get count of videos for each user
     * @return \Illuminate\Http\JsonResponse
     */
    public function getVideoCount()
    {
        $videos = DB::table('videos')
            ->select('user_id', DB::raw('count(*) as total'))
            ->groupBy('user_id')
            ->get();
        return response()->json($videos, 200);
    }
}
