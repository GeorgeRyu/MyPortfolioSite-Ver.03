<section class="main-view">
		<div id="senter-object" class="senter-object">
            <?php if( $greeting): ?> 
            <p class="greetig-1 yester">
                <?php echo $greeting; ?>    
            </p>
            <?php endif; ?>

			<div class="main-text">
				<div class="my-name">
					<p class="first-name bold">
						<span class="ryu"><span class="ch">R</span></span>
						<span class="ryu"><span class="ch">Y</span></span>
						<span class="ryu"><span class="ch">U</span></span>
					</p>
					<p class="last-name bold">
						<span class="taka"><span class="ch">T</span></span>
						<span class="taka"><span class="ch">A</span></span>
						<span class="taka"><span class="ch">K</span></span>
						<span class="taka"><span class="ch">A</span></span>
						<span class="taka"><span class="ch">H</span></span>
						<span class="taka"><span class="ch">A</span></span>
						<span class="taka"><span class="ch">S</span></span>
						<span class="taka"><span class="ch">H</span></span>
						<span class="taka"><span class="ch">I</span></span>
					</p>
				</div>
				<p class="my-job" >
					<span class="rectangle-job"></span>
					<span class="text-job">
                        <?php echo $type_of_job; ?>
                    </span>
				</p>
			</div>
		</div>
		<div id="scroll" class="scroll">
			<p><?php echo $under_content; ?></p>
			<div class="line-scroll">
			</div>
		</div>
    </section>
    
    <section id="work" class="work-area">
		<div class="inner">