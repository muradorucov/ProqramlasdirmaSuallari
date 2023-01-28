<?php

// PHPPraktika - t06.php
// Verilən massiv daxilindəkiki elementləri məlumat növünə görə qruplaşdırın.

function groupByType($array) {
    // Sizin kodunuz
}

print_r(groupByType([1, "Hello","World",true,[],4,6,8,false])); // [0 => [1, 4, 6, 8], 1 => ["Hello", "World"], 2 => [true, false], 3 => [[]]]
?>