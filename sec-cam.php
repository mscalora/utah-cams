<?php
    header('Content-Type:image/jpeg');
    $file = 'placeholder2.jpg';
    if (isset($_REQUEST['section']) && isset($_REQUEST['name'])) {
        $cams = json_decode(file_get_contents('cam-data.json'), true);
        if ($cams!==null) {
            $section = $_REQUEST['section'];
            $name = $_REQUEST['name'];
            if (isset($cams[$section]) && isset($cams[$section]['cams'])) {
                foreach($cams[$section]['cams'] as $cam) {
                    if ($name === $cam[0]) {
                        $file = $cam[1];
                        break;
                    }
                }
            }
        }
    }
    readfile($file);