<template>
    <div class="p-6 pt-0 space-y-4">
        <div class="space-y-2"><label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for=":rq:-form-item">Emergency Contact Name</label><input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                placeholder="Enter emergency contact name" name="emergencyContactName" id=":rq:-form-item"
                aria-describedby=":rq:-form-item-description" aria-invalid="false" value=""></div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-2"><label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for=":rr:-form-item">Emergency Contact Phone</label><input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    placeholder="Enter emergency contact phone" name="emergencyContactPhone" id=":rr:-form-item"
                    aria-describedby=":rr:-form-item-description" aria-invalid="false" value=""></div>
            <div class="space-y-2"><label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for=":rs:-form-item">Relation</label><input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    placeholder="e.g., Parent, Sibling, Friend" name="emergencyContactRelation" id=":rs:-form-item"
                    aria-describedby=":rs:-form-item-description" aria-invalid="false" value=""></div>
        </div>
    </div>
</template>