-- CreateTable
CREATE TABLE `user_detail` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NULL,
    `ktp_photo` VARCHAR(191) NULL,
    `nik_ktp` VARCHAR(191) NULL,
    `photo` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `date_of_birth` DATE NULL,
    `place_of_birth` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NULL,
    `religion` VARCHAR(191) NULL,
    `educational_background` VARCHAR(191) NULL,
    `marital_status` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_detail_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employee_info` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `employee_status` VARCHAR(191) NOT NULL,
    `location_id` VARCHAR(191) NOT NULL,
    `date_of_entry` DATE NULL,
    `start_date` DATE NULL,
    `end_date` DATE NULL,
    `annual_leave` INTEGER NOT NULL DEFAULT 0,
    `resignation_date` DATE NULL,
    `resignation_reason` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `employee_info_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_detail` ADD CONSTRAINT `user_detail_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employee_info` ADD CONSTRAINT `employee_info_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `employee_info` ADD CONSTRAINT `employee_info_location_id_fkey` FOREIGN KEY (`location_id`) REFERENCES `location`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
